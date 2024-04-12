import net from 'net'

function main() {
  const port = 3000

  const server = net.createServer((c) => {
    console.log("Cliente conectado: ", c.remoteAddress)
    c.write("👌 Bem vindo!\r\n")
    
    c.on("data", (data) => {
      console.log("🎲 Dados recebidos: ", data)
    })

    c.on("end", () => {
      console.log("Cliente desconectado: ", c.remoteAddress)
    })
  })

  server.on("error", (err) => {
    console.error("Erro não tratado do servidor:", err)
  })

  server.listen(port, () => {
    console.log("Servidor iniciado na porta: ", port)
  })
}

main()
