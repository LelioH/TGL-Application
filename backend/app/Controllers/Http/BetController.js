"use strict";

const Bet = use("App/Models/Bet");
const Type = use("App/Models/Type");

class BetController {
  async index({ auth }) {
    const user_id = auth.user.id;

    const bets = await Bet
      .query()
      .where({ user_id })
      .with('types', builder => {
        builder.select('id', 'type', 'color')
      })
      .fetch();

    return bets
  }


  async store({ request, response, auth }) {
    const data = request.all()

    const user = auth.user

    const bets = (Object.values(data))

    console.log(bets)

    let totalPrice = 0


    try {
      for (let index = 0; index < bets.length; index++) {
        const bet = bets[index];

        const type = await Type.query()
          .select('price')
          .where('id', bet.type_id)
          .firstOrFail()

        console.log(type)

        bet.user_id = auth.user.id
        bet.price = type.price
        totalPrice += bet.price

        await Bet.create(bet)
      }
      return response.status(200).send({ message: 'Cadastrado com Sucesso!' })

    } catch (err) {
      console.log(err)
      return response
        .status(err.status)
        .send(err);
    }




    const totalCart = totalPrice
  }

  async show({ params, request, response, view }) {
    const bet = await Bet.findOrFail(params.id)

    await bet.load('user')
    await bet.load('type')

    return bet
  }

  async update({ params, request, response }) {
    const data = request.all()

    const bet = await Bet.findOrFail(params.id)

    const type = await Type.findOrFail(data.type_id)

    data.price = type.price

    await bet.merge(data)
    await bet.save()

    return bet
  }

  async destroy({ params, request, response }) {
    const bet = await Bet.findOrFail(params.id)

    await bet.delete()
  }
}

module.exports = BetController;
