import net from 'net'

function main() {
  const port = 3000

  const server = net.createServer((c) => {
    console.log("🤝🤝 Cliente conectado 🤝🤝\n", c.remoteAddress)
    const body = "<html><head></head><body><h1>Teste</h1></body></html>\n"
    const defaultResponse = `HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: ${body.length}\n\n${body}`
    c.write(defaultResponse)
    
    c.on("data", (data) => {
      console.log("🎲🎲 Dados recebidos 🎲🎲\n", data.toString())
    })

    c.on("end", () => {
      console.log("🙋🙋‍♂️ Cliente desconectado 🙋‍♂️🙋", c.remoteAddress)
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
