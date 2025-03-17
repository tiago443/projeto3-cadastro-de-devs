document.addEventListener("DOMContentLoaded", () => {
    const devForm = document.getElementById("devForm")
    const addTechButton = document.getElementById("addTechButton")
    const techContainer = document.getElementById("techContainer")
    const developers = []
  
    addTechButton.addEventListener("click", () => {
      const techDiv = document.createElement("div")
      techDiv.className = "tech-item"
  
      const techInput = document.createElement("input")
      techInput.type = "text"
      techInput.name = "techName"
      techInput.placeholder = "Nome da Tecnologia"
  
      const experienceTitle = document.createElement("h4")
      experienceTitle.textContent = "Tempo de Experiência"
      const experienceGroup = document.createElement("div")
  
      const experienceOptions = ["0-2 anos", "3-4 anos", "5+ anos"]
      experienceOptions.forEach(option => {
        const radio = document.createElement("input")
        radio.type = "radio"
        radio.name = `experience-${Date.now()}`
        radio.value = option
  
        const radioLabel = document.createElement("label")
        radioLabel.textContent = option
  
        experienceGroup.appendChild(radio)
        experienceGroup.appendChild(radioLabel)
      })
  
      const removeButton = document.createElement("button")
      removeButton.type = "button"
      removeButton.textContent = "Remover"
      removeButton.addEventListener("click", () => {
        techDiv.remove()
      })
  
      techDiv.appendChild(techInput)
      techDiv.appendChild(experienceTitle)
      techDiv.appendChild(experienceGroup)
      techDiv.appendChild(removeButton)
  
      techContainer.appendChild(techDiv)
    })
    
  
    devForm.addEventListener("submit", event => {
      event.preventDefault()
  
      const devName = document.querySelector("input[name='name']").value
      const techItems = document.querySelectorAll(".tech-item")
      const technologies = []
  
      techItems.forEach(techDiv => {
        const techName = techDiv.querySelector("input[name='techName']").value
        const experience = techDiv.querySelector("input[type='radio']:checked")?.value
        if (techName && experience) {
          technologies.push({ techName, experience })
        }
      })
  
      developers.push({ devName, technologies })
      console.log(developers)
  
      devForm.reset()
      techContainer.innerHTML = ""
    })
  })
