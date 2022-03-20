import React from "react";

export default function Form() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Viesti (vapaaehtoinen)</label> <br />
        <textarea id="message" name="message"></textarea>
      </p>
      <p>
        <input type="submit" value="Lähetä" className="submit-button"/>
      </p>
    </form>
  );
}