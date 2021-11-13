import Head from "next/head";
export default function Home() {
    return (
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="display-2 fw-bold">
                    <span className="text-primary">Shivom</span> Srivastava
                </h1>
                <p className="lead">
                    Frontend Developer, Learning Data Scientist, Shōnen Anime
                    Enthusiast
                </p>
            </div>
            <Head>
                <title>Shivom Srivastava | Home</title>
            </Head>
        </div>
    );
}
