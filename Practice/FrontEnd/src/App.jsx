// import { BioProvider } from "./components/ContextAPI"
// import { ThemeProvider } from "./components/ContextAPI"
// import { AuthProvider } from "./components/ContextAPI/AuthContext"
// import { ThemeSwitcherComp } from "./components/ContextAPI/ThemeSwitcher"
// import { UserAuthentication } from "./components/ContextAPI/UserAuthentication"
// import { Footer } from "./components/footer/Footer"
// import { Navbar } from "./components/navbar/navbar"
// import { About } from "./components/Sections/About"
// import { Contact } from "./components/Sections/Contact"
// import { Hero } from "./components/Sections/Hero"
// import { Projects } from "./components/Sections/Projects"
// import { Resume } from "./components/Sections/Resume"
// import { SkillCard } from "./components/Sections/SkillCard"

import { CartProvider } from "./components/ContextAPI/CartContext"
import { CartPage } from "./components/ContextAPI/CartPage"
import { MultiStepForm } from "./components/useReducer/MultiStepForm"
import TodoList from "./components/useReducer/Todo"
import TodoList2 from "./components/useReducer/ToDo2"

function App() {
  return (
    <section >

      {/* <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="hero flex flex-col items-center">
        <Hero />
        <About />
        <div className="Skilss grid grid-cols-4">
        <SkillCard head={"HTML"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem."} progressValue={90} />
        <SkillCard head={"Tailwind"} description={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur."} progressValue={80} />
        <SkillCard head={"JavaScript"} description={"Neque porro quisquam est qui dolorem ipsum quia dolor."} progressValue={80} />
        <SkillCard head={"ExpressJS"} description={"ExpressJS used to handle Server site requests"} progressValue={70} />
        <SkillCard head={"MongoDB"} description={"MOngoDB is a Database that store the data"} progressValue={80} /> 
        </div>
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div> */}

      {/* <BioProvider>
        <ThemeSwitcher />
      </BioProvider> */}

      {/* <ThemeProvider>
        <AuthProvider>
          <UserAuthentication />
        </AuthProvider>
      </ThemeProvider> */}

      {/* <BioProvider>
        <ThemeSwitcher>
          <AuthProvider>
            <UserAuthentication />
          </AuthProvider>
        </ThemeSwitcher>
      </BioProvider> */}

      {/* <CartProvider>
        <CartPage />
      </CartProvider> */}
      {/* <TodoList /> */}
      {/* <TodoList2 /> */}
      <MultiStepForm />

    </section>
  )
}

export default App
