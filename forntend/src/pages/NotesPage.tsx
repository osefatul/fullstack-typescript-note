import NotesPageLoggedOutView from "../components/NotesPageLoggedOutView";
import { User } from "../models/user";
import styles from "../styles/NotesPage.module.css";
import { Container } from "react-bootstrap";
import NotesPageLoggedInView from "../components/NotesPageLoggedInView";


interface NotesPageProps {
    loggedInUser: User | null,
}

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
    return (
        <Container className={styles.notesPage}>
            <>
                {loggedInUser
                    ? <NotesPageLoggedInView />
                    : <NotesPageLoggedOutView />
                }
            </>
        </Container>
    );
}

export default NotesPage;