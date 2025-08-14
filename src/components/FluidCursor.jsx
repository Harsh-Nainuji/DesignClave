import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useFBO, MeshTransmissionMaterial } from '@react-three/drei'
import { easing } from 'maath'
import * as THREE from 'three'

function CursorLens() {
  const ref = useRef()
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new THREE.Scene())

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])

    // Follow mouse pointer with smooth damping
    const destX = (pointer.x * v.width) / 2
    const destY = (pointer.y * v.height) / 2
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta)

    // Dynamic scaling based on viewport
    const maxWorld = v.width * 0.9
    const desired = maxWorld / 2
    const scale = Math.min(0.25, desired)
    ref.current.scale.setScalar(scale)

    // Render scene to buffer for transmission effect
    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    // Transparent background
    gl.setClearColor(0x000000, 0)
  })

  return (
    <>
      {/* Background plane that captures the scene */}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      
      {/* Enhanced glass lens with better distortion for text */}
      <mesh
        ref={ref}
        scale={0.25}
        rotation-x={Math.PI / 2}
      >
        <cylinderGeometry args={[1, 1, 0.04, 64]} />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={2.0}
          thickness={20}
          anisotropy={0.08}
          chromaticAberration={0.15}
          transmission={1}
          roughness={0.15}
          color="#ffffff"
          attenuationColor="#ffffff"
          attenuationDistance={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          opacity={0.8}
          distortion={0.8}
          distortionScale={1.0}
          backside={true}
        />
      </mesh>
      
      {/* Subtle inner ring for better definition */}
      <mesh
        ref={ref}
        scale={0.23}
        rotation-x={Math.PI / 2}
      >
        <ringGeometry args={[0.85, 0.95, 64]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.2}
        />
      </mesh>
    </>
  )
}

const FluidCursor = ({ enabled = true }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isInHero, setIsInHero] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e) => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        const isInside = 
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        setIsInHero(isInside)
        setIsVisible(isInside)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsInHero(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [enabled])

  if (!enabled || !isVisible || !isInHero) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <CursorLens />
      </Canvas>
    </div>
  )
}

export default FluidCursor 