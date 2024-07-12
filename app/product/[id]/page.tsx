export default function SingleProdut ({params}:{params:{id:string}}){
    const {id}=params
    return(
        <>
        <div className="mt-[10rem]">{id}</div>
        </>
    )
}