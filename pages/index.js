import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li> 
        <Link href='/pet'> Generador de nombres de mascotas </Link>
      </li>
      <li> 
        <Link href='/image'> Generador imagenes </Link>
      </li>
    </ul>
  )
}
