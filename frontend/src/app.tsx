import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route
} from "preact-iso";
import {Footer, Navbar} from "./widgets";
import {Activity, Home, Staff, Labs, History, Contacts, Media, AI} from "./pages";

export function App() {

  return (
    <>
      <LocationProvider>
        <ErrorBoundary>
          <Navbar />
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
    </>
  );

};
