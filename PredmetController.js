class PredmetController {
  async getPredmets(req, res) {
    try {
      const predmets = await Predmet.find();
      res.json(predmets);
      console.log(predmets);
    } catch (error) {
      console.log("Ошибка при получении предмета: " + error);
    }
  }

  async addPredmet(req, res) {
    try {
      const { title, description, price } = req.body;
      const newPredmet = await Predmet.create({
        title,
        description,
        price,
      });

      await newPredmet.save();
      res.send("Предмет успешно добавлен!");
    } catch (error) {
      console.log("Ошибка при добавлении предмета: " + error);
    }
  }
  async updatePredmet(req, res) {
    try {
      const { title, description, price } = req.body;
      const updatePredmet = await Predmet.edit({
        title,
        description,
        price,
      });

      await updatePredmet.save();
      res.send("Предмет успешно изменен!");
    } catch (error) {
      console.log("Ошибка при изменении предмета: " + error);
    }
  }
  async updatePredmet(req, res) {
    try {
      const { title, description, price } = req.body;
      const newPredmet = await Predmet.create({
        title,
        description,
        price,
      });

      await newPredmet.save();
      res.send("Предмет успешно изменен!");
    } catch (error) {
      console.log("Ошибка при изменении предмета: " + error);
    }
  }
}

export default new PredmetController();
