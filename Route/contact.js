// importation express
const express = require("express");
// importation express router
const router = express.Router();

// importation schema
const Contact = require("../Model/Contact");

//-------------CRUDS----------//

//get
router.get("/test", (req, res) => {
  res.send("test");
});

//post
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({
      name,
      email,
      phone,
    });
    await newContact.save();
    res.status(200).send({ msg: "Done", newContact });
  } catch (error) {
    res.status(400).send({ msg: "Fail", error });
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const contactList = await Contact.find();
    res.status(200).send({ msg: "Done", contactList });
  } catch (error) {
    res.status(400).send({ msg: "Fail", error });
  }
});

//get one
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const contactFounder = await Contact.findOne({ _id });
    res.status(200).send({ msg: "Done", contactFounder });
  } catch (error) {
    res.status(400).send({ msg: "Fail", error });
  }
});
//updaaate
router.put("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email, phone } = req.body;
    const contactEdit = await Contact.updateOne(
      { _id },
      { $set: { ...req.body } }
    );
    res
      .status(200)
      .send({ msg: "Done", contactEdit });
  } catch (error) {
    res.status(400).send({ msg: "Fail", error });
  }
});

//delete
router.delete("/delete/:_id",async(req,res)=>{
    try {
    const {_id}=req.params
    const contactDelete= await Contact.deleteOne({_id})
    res.send({ msg: "Done", contactDelete });
    } catch (error) {
    res.status(400).send({ msg: "Fail", error });
        
    }
})

module.exports = router;
