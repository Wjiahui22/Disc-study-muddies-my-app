import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

function FindUrNerdPage() {
    return (
        <div>
    <Navbar />
  
    <div class="box">
      <h3>FILTER BY:</h3>
      <div class="button-row">
        <button class="class-subject">Class & Subject</button>
        <button class="music-choice">Music Choice</button>
        <button class="location-choice">Location Choice</button>
      </div>
      <div>
        <button class="keyword">Keyword</button>
        <button class="submit">Submit</button>
      </div>
    </div>
  
    <div class="container">
        <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="Bob" classasubject="Chemistry" musicchoice="Lofi" locationchoice="Mudd Library"></Card>
        <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="Jane" classasubject="Chemistry" musicchoice="Classic" locationchoice="Main Library"></Card>
        <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="Ashley" classasubject="Chemistry" musicchoice="Pop" locationchoice="Tech"></Card>
        <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="John" classasubject="Chemistry" musicchoice="None" locationchoice="Willard"></Card>
    </div>
  
    <Footer />
  </div>
    );
  }

  export default FindUrNerdPage;