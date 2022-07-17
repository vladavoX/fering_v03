import './styles/Banner.css'

export default function Banner() {
  const url = window.location.href
  var lastSegment = url.split("/").pop()
  lastSegment = lastSegment.replace(/-/g, " ");
  lastSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  return (
    <>
      <div className="banner">
        <h1>{lastSegment}</h1>
      </div>
    </>
  )
}
