const preguntas = [
    {
      texto: "¿Cuál es la capital de Francia?",
      opciones: ["Madrid", "Berlín", "París"],
      correcta: 2
    },
    {
      texto: "¿Qué elemento tiene el símbolo 'O'?",
      opciones: ["Oro", "Oxígeno", "Osmio"],
      correcta: 1
    },
    {
      texto: "¿Cuál es el resultado de 3 x 4?",
      opciones: ["12", "9", "15"],
      correcta: 0
    }
  ];
  
  const container = document.getElementById("question-list");
  
  preguntas.forEach(p => {
    const card = document.createElement("div");
    card.className = "question-card";
  
    const title = document.createElement("div");
    title.className = "question-text";
    title.textContent = p.texto;
    card.appendChild(title);
  
    p.opciones.forEach((op, i) => {
      const opt = document.createElement("div");
      opt.className = "option" + (i === p.correcta ? " correct" : "");
      opt.textContent = `${i + 1}. ${op}`;
      card.appendChild(opt);
    });
  
    container.appendChild(card);
  });
  