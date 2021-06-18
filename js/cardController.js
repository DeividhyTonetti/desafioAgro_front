const CardComponent = (id) => (
  ` 
    <div class="row justify-content-center form-group" id='card-${id}'>
      <div class="col-xl-6 col-md-6 offset-md-1">
        <div class="card border-left-${colorCard()} shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-10">
                  Faça a sua pergunta :)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <form class="user">
                    <div class="form-group row">
                      <div class="col-sm mt-3 mb-0">
                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                          placeholder="Questionário sem título">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-auto">
                  <i class="fas fa-question fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${ButtonsComponent(id)}
    </div>
  `
);

const ButtonsComponent = (id) => ( 
  `
    <div class="col-md-1 mb-1" id="buttons-${id}">
      <a href="#" class="btn btn-success btn-circle" id="${id}" onclick="createQuestion(this.id)">
        <i class="fas fa-plus"></i>
      </a>
      <a href="#" class="btn btn-danger btn-circle" id="${id}"  onclick="deleteQuestion(this.id)">
        <i class="fas fa-trash"></i>
      </a>
    </div>
  `
);

const createQuestion = (id) => {
  const createDiv = document.createElement('div');

  document.getElementById(id).style.display  = 'none';

  createDiv.innerHTML = CardComponent(++id);

  const questions = document.getElementById('questions');
  questions.appendChild(createDiv);
  
}

const deleteQuestion = (id) => {
  document.getElementById(`card-${id}`).remove();
  document.getElementById(--id).style = 'block';
}


const colorCard = () => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'dark',
  ];

  const random = Math.floor(Math.random() * 7);

  return colors[random];
}
