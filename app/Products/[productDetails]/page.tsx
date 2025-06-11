type Props = {
    params: {
        productDetails: string
    }
}
export  default function productDetails({params}: Props){
    console.log(params)
    return (
        <div>Prdouct Details{params.productDetails}</div>
    )
}