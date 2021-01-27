const generateManager = Manager => {
    return `
            <div class="card shadow m-2 col-3">
                <div class="card-header bg-primary ml-0 mt-1 rounded">
                    <h2 class= "card-title">${Manager.name}</h2>
                    <h5 class="card-text"><i class="fas fa-coffee"></i>&nbsp;${Manager.role}</h5>
                </div>
                <div class="card-body bg-light my-2">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                        <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
                    </ul>
                </div>
        </div>`
}

const generateSales = Sales => {
    return `
            <div class="card shadow m-2 col-3">
                <div class="card-header bg-primary ml-0 mt-1 rounded">
                    <h2 class= "card-title">${Sales.name}</h2>
                    <h5 class="card-text"><i class="fas fa-coffee"></i>&nbsp;${Sales.role}</h5>
                </div>
                <div class="card-body bg-light my-2">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Sales.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${Sales.email}">${Sales.email}</a></li>
                        <li class="list-group-item">Office number: ${Sales.officeNumber}</li>
                    </ul>
                </div>
        </div>`
}

const generatehumanresources = humanresourcesArr => {
        return `
        ${humanresourcesArr
        .map(({ name, id, email, github, role }) => {
            return `
            <div class="card shadow m-2 col-3">
                <div class="card-header bg-primary ml-0 mt-1 rounded">
                    <h2 class= "card-title">${name}</h2>
                    <h5 class="card-text"><i class="fas fa-cogs"></i>&nbsp;${role}</h5>
                </div>
                <div class="card-body bg-light my-2">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
                    </ul>
                </div>
            </div>
            `;
        })
        .join('')}
        `}

const generateTemp = tempArr => {
        return `
        ${internsArr
            .map(({ name, id, email, school, role }) => {
                return `
                <div class="card shadow m-2 col-3">
                <div class="card-header bg-primary ml-0 mt-1 rounded">
                    <h2 class= "card-title">${name}</h2>
                    <h5 class="card-text"><i class="fas fa-graduation-cap"></i>&nbsp;${role}</h5>
                </div>
                <div class="card-body bg-light my-2">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
                `;
            })
            .join('')}
            `};

module.exports = templateData => {

    // destructure page data by section
    const {managers, sales, humanresources, ...temp } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <nav class="navbar navbar-dark bg-secondary text-center">
            <span class="navbar-brand mb-0 w-100 h1 text-white">My Team</span>
        </nav>
      <main class="container my-5">
        <div class="row justify-content-center">
       ${generateManager(manager)}
       ${generateEngineers(sales)}
       ${generateEngineers(humanresources)}
       ${generateInterns(temp)}
       </div>
      </main>
    </body>
    </html>
    `;
  };
