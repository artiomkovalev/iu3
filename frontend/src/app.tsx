import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route
} from "preact-iso";
import {Footer, Modal, Navbar} from "./widgets";
import {Activity, Home, Staff, Labs, History, Contacts, Media, AI} from "./pages";
import {ModalProvider} from "./contexts";

function ModalWarn() {

  /*const modal = useModal();

  useEffect(() => {
    modal.openModal({
      title: "Внимание",
      content: <div>
        <Text>Данный сайт не является официальным сайтом кафедры. Все материалы принадлежат кафедре ИУ3 МГТУ имени Н.Э. Баумана</Text>
        <div className="button" onClick={modal.closeModal}>Хорошо</div>
      </div>
    });
  }, []);*/

  return null;

};

export function App() {

  return (
    <ModalProvider>
      <Modal />
      <LocationProvider>
        <ErrorBoundary>
          <Navbar />
          <ModalWarn />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/activity" component={Activity} />
            <Route path="/staff" component={Staff} />
            <Route path="/labs" component={Labs} />
            <Route path="/history" component={History} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/media" component={Media} />
            <Route path="/ai" component={AI} />
          </Router>
          <Footer />
        </ErrorBoundary>
      </LocationProvider>
    </ModalProvider>
  );

};
