export default function Checkboxes() {
  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="swimming" />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="bathing" />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="chatting" />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="noTime" />Imagining I have a Rubber Duck
        </label>
      </li>
    </ul>
  );
}
