import express, { type Request, type Response } from "express";
import { fileURLToPath } from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "../../public")))



app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"), err => {
        if (err) {
            res.status(404).send("Página principal não encontrada.");
        }
    });
});

app.get("/zeus", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../public/html/zeus.html"), err => {
        if (err) {
            res.status(404).send("Página do sistema Zeus não encontrada.");
        }
    });
});

app.get("/mariaBonita", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../public/html/sistema_mb.html"), err => {
        if (err) {
            res.status(404).send("Página do projeto da Maria Bonita não encontrada.");
        }
    });
});

app.get("/LojaGames", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../public/html/LojaGames.html"), err => {
        if (err) {
            res.status(404).send("Página da loja online não encontrada.");
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});