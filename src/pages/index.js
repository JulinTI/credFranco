import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Supermercado Cred</title>
            </Head>

            <div className="container align-self-center d-flex justify-content-center" id="container-home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent:'center', left: '50vh' , right: '-50vh'}}>
                <Card sx={{ Width: 700, Height: 700 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bem vindo ao site do supermercado Cred
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Para fazer o seu login clique em um dos botões abaixo:
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href='/login'>
                            Login
                        </Button>
                        <Button size="small" color="primary" href='/register'>
                            Registrar
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

