export default{
    
    title: "Skills",
    name: "skills",
    type: "document",
    fields: [
        {
            title: "Domain",
            name: "domain",
            type: 'string',
            
          },
      {
        title: "Skill",
        name: "skill",
        type: 'array',
        of: [{type: 'string'}]
      } 
    ]
  

}