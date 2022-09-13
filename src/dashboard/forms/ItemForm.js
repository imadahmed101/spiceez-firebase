import { useRef } from 'react'
import { storage, db } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'

const ItemForm = () => {
  const form = useRef();

  const submitItem = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const price = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `item/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            saveItem({
              name,
              description,
              price,
              image: downloadUrl
            })
          }, () => {
            saveItem({
              name,
              description,
              price,
              image: null
            })

          })
      }, () => {
        saveItem({
          name,
          description,
          price,
          image: null
        })

      }
    )
  }

  const saveItem = async (item) => {
    console.log(item);
    try {
      await addDoc(collection(db, 'item'), item);
      alert('Added Item Successfully');
      window.location.reload(false);
    }
    catch (error) {
      console.log(error);
      alert('Failed To Add Item');
    }
  }


  return (
    <div>

      <h3>Add Item</h3>

      <form ref={form} onSubmit={submitItem}>
        <input type="text" placeholder="Name" />
        <br />
        <textarea placeholder="Description" />
        <br />
        <input type="text" placeholder="Price" />
        <br />
        <input type="file" placeholder="Image" />
        <br />
        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default ItemForm