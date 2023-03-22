let instructions = [
    {
    "id":1,
    "intruction":"colocaté con crazy socks 🧦🤪 y llega al lugar de invitación 🦦"
    },
    {
     "id":2,
     "intruction":"prepara las palomitas 🕊 que te llegaran con tu kit de jugador 🎮 ( tambien puedes disfrutar del resto del kit)"
    },
    {
    "id":3,
    "intruction":"descarga steam e ingresa con el correo: pass:"
    },
    {
    "id":4,
    "intruction":"busca el juego bread and fread 🐧 🐧"
    },
    {
        "id":5,
        "intruction":"a jugar!!🥳"
    },

    {
        "id":6,
        "intruction":"no busques bugs en esta invitación de seguro hay pero yolo 🐛"
    }


]


 document.getElementById("collapseExample").innerHTML =
 instructions.map((id)=> {
    return `
    <div class="py-2">
    <div class="card card-body shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 459px">
    ${id.id}- ${id.intruction}
  </div>
  </div>
      `                   
}).join('')


