import Button from "./elements/button"

export const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h2 className = "text-4xl font-bold">Fresh, flavorful, authentic Thai cuisine.</h2>
        <Button text={"Order Online"}/>
      </div>
    </div>
  )
}