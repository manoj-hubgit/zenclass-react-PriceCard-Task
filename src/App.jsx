import React from "react";
import Card from "./Components/Card/Card";

const App = () => {
  
  const card = [
    {
      title: "Free",
      months: "$0",
      user:{title:"Single User",classStyle: "fa fa-check"},
      storage: {title:"5GB Storage",classStyle: "fa fa-check"},
      publicProject: {title:"Unlimited Public Project",classStyle: "fa fa-check"},
      access:{title:"Community Access",classStyle:"fa fa-check "},
      privateProject:{title:"Unlimited Private Project",classStyle:"fa fa-times",muted:"text-muted"},
      phonesupport:{title:"Dedicated Phone Support",classStyle: "fa fa-times",muted:"text-muted"},
      subscription:{title:"Free Subdomain",classStyle: "fa fa-times",muted:"text-muted"},
      reports: {title:"Monthly Status Reports",classStyle:"fa fa-times",muted:"text-muted"},
      

    },
    {
      title: "Plus",
      months: "$9",
      user:{title:"5 User",classStyle: "fa fa-check"},
      storage: {title:"50GB Storage",classStyle: "fa fa-check"},
      publicProject:{title:"Unlimited Public Project",classStyle: "fa fa-check"},
      access:{title: "Community Access",classStyle: "fa fa-check"},
      privateProject:{title:"Unlimited Private Project",classStyle: "fa fa-check"},
      phonesupport:{title:"Dedicated Phone Support",classStyle: "fa fa-check"},
      subscription:{title:"Free Subdomain",classStyle: "fa fa-check"},
      reports:{title:"Monthly Status Reports",classStyle: "fa fa-times",muted:"text-muted"},
    },
    {
      title: "Pro",
      months: "$49",
      user:{title:"Unlimited User",classStyle: "fa fa-check"},
      storage:{title:"150GB Storage",classStyle: "fa fa-check"},
      publicProject:{title:"Unlimited Public Project",classStyle: "fa fa-check"},
      access:{title:"Community Access",classStyle: "fa fa-check"},
      privateProject:{title:"Unlimited Private Project",classStyle: "fa fa-check"},
      phonesupport:{title:"Dedicated Phone Support",classStyle: "fa fa-check"},
      subscription:{title:"Free Subdomain",classStyle: "fa fa-check"},
      reports:{title:"Monthly Status Reports",classStyle: "fa fa-check"},

    },
  ];
  return (
    <div style={{ backgroundColor: "rgb(33, 147, 244)" }}>
      <Card card={card} />
    </div>
  );
};

export default App;
