function MyButton() {
    //You can respond to events by declarig event handler funtion inside your components
    return (
        <button>I'm Fanny </button>
    )
}


//Markup with JSX
function AboutPage() {

    return (
        <>
            <h1>About</h1>
            <p>Hello there. <br/> How do you do ?</p>
        </>
    )
}

//Updating the screen

export default function MyApp() {
    return(
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
    )
}