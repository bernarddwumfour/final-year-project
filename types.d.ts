type faq = {
    heading : string,
    content : string

}


type faqs = faq[]

interface appcontext  {
    modalopen : Boolean,
    togglemodal : ()=>void,
    modalcontent : String,
    togglemodalcontent : (state:string)=> void,
}

type voidfunction = ()=>void