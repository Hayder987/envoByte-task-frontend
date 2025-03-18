

const TeamSlide = ({logo, name, title}) => {
  return (
    <div className="border-r border-gray-300">
        <img src={logo} alt="" className="w-full" />
        <div className="p-4 text-white  bg-[#03135b]">
            <p className="text-xl font-semibold">{name}</p>
            <p className="font-semibold">{title}</p>
        </div>
    </div>
  )
}

export default TeamSlide