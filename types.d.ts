type faq = {
  heading: string;
  content: string;
};

type user = {
  id: string;
  firstname: string;
  surname: string;
  email: string;
  password: string;
};

type faqs = faq[];

type summarisedpolicy = {
  DataCollection: string;
  DataUsage: string;
  DataStorage: string;
  DataSharing: string;
  RightsandProtection: string;
};

interface appcontext {
  modalopen: Boolean;
  togglemodal: () => void;
  modalcontent: String;
  togglemodalcontent: (state: string) => void;
  pagemessage: string;
  pagemessagestate: Boolean;
  pagemessagetype: string;
  showpagemessage: (
    message: string,
    type: "info" | "success" | "error"
  ) => void;
  summarisedpolicy: summarisedpolicy;
  addsummarisedpolicy: (policy: summarisedpolicy) => void;
  loggedInuser : loggedInUser,
  setCurrentUser : (user :loggedInUser)=>void,
  logoutUser :()=>void
}

type voidfunction = () => void;

type loggedInUser = {
  email: string;
  firstname: string;
  id: string;
  surname: string;
};
