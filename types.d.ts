type faq = {
    heading : string,
    content : string

}


type faqs = faq[]

type appcontext = {
    modalopen : Boolean,
    togglemodal : ()=>void
}

type voidfunction = ()=>void