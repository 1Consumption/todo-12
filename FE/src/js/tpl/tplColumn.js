export function tplColumn(id) {
  const column = `
              <section class="todo__column" id="column-data-id-${id}">
                <h2 class="column__title blind"></h2>
                <div class="column__header flex">
                  <div>
                    <span class="column__card-count"></span>
                    <span class="column__title"></span>
                  </div>
                  <div>
                    <button type="button" class="plus-btn add-card-btn">
                      <i class="fas fa-plus"></i>
                    </button>
                    <button type="button" class="close-btn">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
      
                <!-- add Card -->
                <div class="add__todo">
                 <div class="input-box">
                      <textarea name="" id="" maxlength="500" aria-label="내용을 입력하세요" placeholder="Enter a note" class="add__input"></textarea>
                   </div>
                  <div class="add__btn">
                     <button type="button" class="btn__green " disabled='disabled'>Add</button>
                     <button type="button" class="btn__cancel" id="cancel-card-btn">Cancel</button>
                  </div>
                </div>
                <!-- //add Card -->
      
                <!-- card -->
                <ul class="column__cards">
                </ul>
                <!-- //card -->
              
              </section>
              `;

  return column;
}

export function tplAddColumn() {
  const addColumn = `
  <section id="todo__add-column" class="todo__column flex">
  <div class="add-column__btn">
    <button type="button">
      <i class="fas fa-plus"></i> 
      <span>Add column</span>
    </button>
  </div>
  </section>
  `;

  return addColumn;
}
