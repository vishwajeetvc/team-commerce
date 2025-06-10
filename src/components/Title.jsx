function Title({label1, label2, reverse}) {


  return (
    <div className={`flex gap-3 md:text-xl items-center`}>
      {reverse && <span className="inline-block w-[60px] h-[3px] bg-amber-400"></span>}
      <p className="text-gray-400 ">{label1}</p>
      <p className="text-gray-700">{label2}</p>
      {!reverse && <span className="inline-block mx-[15px] w-[60px] h-[3px] bg-amber-400"></span>}
    </div>

  )
}

export default Title
