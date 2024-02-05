/**
 * @param {Todo} data
 * @returns {HTMLElement}
 */

// Here I'm creating a new element with JS that will appear when user press add-task-btn
//First I'm creating template of task that will appear

const template = `<li id="task">
            <div class="row-1">
              <div class="indicator-and-title">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="task-checkbox"
                  class="checkbox"
                />
                <label for="task-checkbox" class="taskLabel">Title</label>
              </div>
              <div class="control-btns">
                <button class="editBtn">
                  <img src="./Images/edit-icon.png" alt="" />
                </button>
                <button class="deleteBtn">
                  <img src="./Images/close-icon.png" alt="" />
                </button>
              </div>
            </div>
            <div class="row-2">
              <p>Last updated:</p>
            </div>
          </li>
`;

//This funtion I need just for generating task-box (this function doesn't make it appear)

export function createNewTask(data) {
  const wrapper = document.createElement("li");

  wrapper.innerHTML = template;

  const title = wrapper.querySelector(".taskLabel");
  title.textContent = data.title; //title.textContent because I take title from previouse line "const title ="

  const editBtn = wrapper.querySelector(".editBtn");

  const deleteBtn = wrapper.querySelector(".deleteBtn");

  const subtitle = wrapper.querySelector("p");
  subtitle.textContent = data.subtitle;

  return wrapper;
}
