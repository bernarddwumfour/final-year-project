type faq = {
    heading : string,
    content : string

}

type user= {
    id : string,
    firstname : string,
    surname : string,
    email : string,
    password : string,
}


type faqs = faq[]

interface appcontext  {
    modalopen : Boolean,
    togglemodal : ()=>void,
    modalcontent : String,
    togglemodalcontent : (state:string)=> void,
    pagemessage : string,
    pagemessagestate : Boolean,
    pagemessagetype :string,
    showpagemessage : (message:string,type:"info"|"success"|"error")=>void
}

type voidfunction = ()=>void