export const generalHtmlTemplate = (data: any) => {
  return `
  <html>
    <head>
      <style>
        body {
          display:flex;
          flex-direction:column;
          gap:1rem;
        }
        section{
          width:100%;
          height:fit-content;
          display:flex;
          flex-direction:column;
          gap:1rem;
        }
        section div{
          width:100%;
          min-height:30px;
          height:fit-content;
          display:flex;
          align-items:center;
          font-size:18px;
        }
        section div span:nth-child(1){
          background-color: #4C8BF5;
          text-align: left;
          font-weight:bold;
          width:fit-content;
          min-width:100px;
          height:100%;
          padding:10px;
        }
        section div span:nth-child(2){
          background-color:#fff;
          color:#000;
          height:100%;
          width:100%;
          font-weight:normal;
          padding:10px;
          flex-wrap:wrap;
        }
      </style>
    </head>
    <body>
      <header>
        <p>Dear Mission Compassion,</p>
        <p>You have received a message from the general contact form. Please see below for the details</p>      
      </header>
      <section>
        <div>
          <span>First Name:</span> <span>${data.firstName
            .slice(0, 1)
            .toUpperCase()}${data.firstName.slice(1).toLowerCase()}</span>
        </div>
        <div>
          <span>Last Name:</span> <span>${data.lastName
            .slice(0, 1)
            .toUpperCase()}${data.lastName.slice(1).toLowerCase()}</span>
        </div>
        <div>
          <span>Email:</span> <span>${data.email}</span>
        </div>
        <div>
          <span>Message:</span> <span>${data.message}</span>
        </div>
      </section>
    </body>  
  </html>
  `;
};
