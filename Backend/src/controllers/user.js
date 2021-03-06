const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//comment out for production
//const secrets = require('../secrets');

exports.register = (req, res, next) => {
  const auth = req.headers.authorization;
  if(auth === process.env.AUTH) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        const user = new User({
          email: req.body.email,
          password: hash,
          username: req.body.username,
          character: req.body.character,
          followers: req.body.followers,
          following: req.body.following,
          boulder: req.body.boulder,
          cascade: req.body.cascade,
          thunder: req.body.thunder,
          rainbow: req.body.rainbow,
          soul: req.body.soul,
          marsh: req.body.marsh,
          volcano: req.body.volcano,
          earth: req.body.earth,
          zephyr: req.body.zephyr,
          hive: req.body.hive,
          plain: req.body.plain,
          fog: req.body.fog,
          storm: req.body.storm,
          mineral: req.body.mineral,
          glacier: req.body.glacier,
          rising: req.body.rising,
          stone: req.body.stone,
          knuckle: req.body.knuckle,
          dynamo: req.body.dynamo,
          heat: req.body.heat,
          balance: req.body.balance,
          feather: req.body.feather,
          mind: req.body.mind,
          rain: req.body.rain,
          coal: req.body.coal,
          forest: req.body.forest,
          cobble: req.body.cobble,
          fen: req.body.fen,
          relic: req.body.relic,
          mine: req.body.mine,
          icicle: req.body.icicle,
          beacon: req.body.beacon,
          trio: req.body.trio,
          basic: req.body.basic,
          insect: req.body.insect,
          bolt: req.body.bolt,
          quake: req.body.quake,
          jet: req.body.jet,
          freeze: req.body.freeze,
          legend: req.body.legend,
          toxic: req.body.toxic,
          wave: req.body.wave,
          bug: req.body.bug,
          cliff: req.body.cliff,
          rumble: req.body.rumble,
          plant: req.body.plant,
          voltage: req.body.voltage,
          fairy: req.body.fairy,
          psychic: req.body.psychic,
          iceberg: req.body.iceberg,
          boulder7: req.body.boulder7,
          cascade7: req.body.cascade7,
          thunder7: req.body.thunder7,
          rainbow7: req.body.rainbow7,
          soul7: req.body.soul7,
          marsh7: req.body.marsh7,
          volcano7: req.body.volcano7,
          earth7: req.body.earth7,
          grass: req.body.grass,
          water: req.body.water,
          fire: req.body.fire,
          fighting: req.body.fighting,
          fairy2: req.body.fairy2,
          rock: req.body.rock,
          dark: req.body.dark,
          dragon: req.body.dragon,
          ghost: req.body.ghost,
          ice: req.body.ice
        });
        user.save().then(
          () => {
            res.status(200).json({
              message: 'User created successfully'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            })
          }
        )
      });
  });
  } else {
    res.status(500).json({
      message: "Unauthorized!"
    });
  }
};

exports.login = (req, res, next) => {
  const auth = req.headers.authorization;
  if(auth === process.env.AUTH) {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if(!user) {
          return res.status(401).json({
            message: 'User not found!'
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                message: 'Incorrect password!'
              });
            }
            const token = jwt.sign(
              { userId: user._id },
              process.env.RANDOM_TOKEN_SECRET,
              { expiresIn: '24h'});
            res.status(200).json({
              message: 'Connected',
              username: user.username,
              character: user.character,
              userId: user._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        )
      }
    );
  } else {
    res.status(500).json({
      message: "Unauthorized!"
    });
  }
};

exports.profile = (req, res, next) => {
  User.findOne({ username: req.headers.username }).then(
    (user) => {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
      const userId = decodedToken.userId;
      const mongoId = user._id.toString();

      if(!user) {
        return res.status(401).json({
          error: 'User not found!'
        });
      } else if(userId !== mongoId) {
        res.status(200).json({
          message: 'Profile visitor',
          username: user.username,
          character: user.character,
          followers: user.followers,
          following: user.following,
          boulder: user.boulder,
          cascade: user.cascade,
          thunder: user.thunder,
          rainbow: user.rainbow,
          soul: user.soul,
          marsh: user.marsh,
          volcano: user.volcano,
          earth: user.earth,
          zephyr: user.zephyr,
          hive: user.hive,
          plain: user.plain,
          fog: user.fog,
          storm: user.storm,
          mineral: user.mineral,
          glacier: user.glacier,
          rising: user.rising,
          stone: user.stone,
          knuckle: user.knuckle,
          dynamo: user.dynamo,
          heat: user.heat,
          balance: user.balance,
          feather: user.feather,
          mind: user.mind,
          rain: user.rain,
          coal: user.coal,
          forest: user.forest,
          cobble: user.cobble,
          fen: user.fen,
          relic: user.relic,
          mine: user.mine,
          icicle: user.icicle,
          beacon: user.beacon,
          trio: user.trio,
          basic: user.basic,
          insect: user.insect,
          bolt: user.bolt,
          quake: user.quake,
          jet: user.jet,
          freeze: user.freeze,
          legend: user.legend,
          toxic: user.toxic,
          wave: user.wave,
          bug: user.bug,
          cliff: user.cliff,
          rumble: user.rumble,
          plant: user.plant,
          voltage: user.voltage,
          fairy: user.fairy,
          psychic: user.psychic,
          iceberg: user.iceberg,
          boulder7: user.boulder7,
          cascade7: user.cascade7,
          thunder7: user.thunder7,
          rainbow7: user.rainbow7,
          soul7: user.soul7,
          marsh7: user.marsh7,
          volcano7: user.volcano7,
          earth7: user.earth7,
          grass: user.grass,
          water: user.water,
          fire: user.fire,
          fighting: user.fighting,
          fairy2: user.fairy2,
          rock: user.rock,
          dark: user.dark,
          dragon: user.dragon,
          ghost: user.ghost,
          ice: user.ice
        });
      } else {
        res.status(200).json({
          message: 'Profile owner',
          username: user.username,
          character: user.character,
          followers: user.followers,
          following: user.following,
          boulder: user.boulder,
          cascade: user.cascade,
          thunder: user.thunder,
          rainbow: user.rainbow,
          soul: user.soul,
          marsh: user.marsh,
          volcano: user.volcano,
          earth: user.earth,
          zephyr: user.zephyr,
          hive: user.hive,
          plain: user.plain,
          fog: user.fog,
          storm: user.storm,
          mineral: user.mineral,
          glacier: user.glacier,
          rising: user.rising,
          stone: user.stone,
          knuckle: user.knuckle,
          dynamo: user.dynamo,
          heat: user.heat,
          balance: user.balance,
          feather: user.feather,
          mind: user.mind,
          rain: user.rain,
          coal: user.coal,
          forest: user.forest,
          cobble: user.cobble,
          fen: user.fen,
          relic: user.relic,
          mine: user.mine,
          icicle: user.icicle,
          beacon: user.beacon,
          trio: user.trio,
          basic: user.basic,
          insect: user.insect,
          bolt: user.bolt,
          quake: user.quake,
          jet: user.jet,
          freeze: user.freeze,
          legend: user.legend,
          toxic: user.toxic,
          wave: user.wave,
          bug: user.bug,
          cliff: user.cliff,
          rumble: user.rumble,
          plant: user.plant,
          voltage: user.voltage,
          fairy: user.fairy,
          psychic: user.psychic,
          iceberg: user.iceberg,
          boulder7: user.boulder7,
          cascade7: user.cascade7,
          thunder7: user.thunder7,
          rainbow7: user.rainbow7,
          soul7: user.soul7,
          marsh7: user.marsh7,
          volcano7: user.volcano7,
          earth7: user.earth7,
          grass: user.grass,
          water: user.water,
          fire: user.fire,
          fighting: user.fighting,
          fairy2: user.fairy2,
          rock: user.rock,
          dark: user.dark,
          dragon: user.dragon,
          ghost: user.ghost,
          ice: user.ice
        });
      }
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
};

exports.modifyBadges = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
  const userId = decodedToken.userId;
  const user = new User({
    _id: userId,
    boulder: req.body.boulder,
    cascade: req.body.cascade,
    thunder: req.body.thunder,
    rainbow: req.body.rainbow,
    soul: req.body.soul,
    marsh: req.body.marsh,
    volcano: req.body.volcano,
    earth: req.body.earth,
    zephyr: req.body.zephyr,
    hive: req.body.hive,
    plain: req.body.plain,
    fog: req.body.fog,
    storm: req.body.storm,
    mineral: req.body.mineral,
    glacier: req.body.glacier,
    rising: req.body.rising,
    stone: req.body.stone,
    knuckle: req.body.knuckle,
    dynamo: req.body.dynamo,
    heat: req.body.heat,
    balance: req.body.balance,
    feather: req.body.feather,
    mind: req.body.mind,
    rain: req.body.rain,
    coal: req.body.coal,
    forest: req.body.forest,
    cobble: req.body.cobble,
    fen: req.body.fen,
    relic: req.body.relic,
    mine: req.body.mine,
    icicle: req.body.icicle,
    beacon: req.body.beacon,
    trio: req.body.trio,
    basic: req.body.basic,
    insect: req.body.insect,
    bolt: req.body.bolt,
    quake: req.body.quake,
    jet: req.body.jet,
    freeze: req.body.freeze,
    legend: req.body.legend,
    toxic: req.body.toxic,
    wave: req.body.wave,
    bug: req.body.bug,
    cliff: req.body.cliff,
    rumble: req.body.rumble,
    plant: req.body.plant,
    voltage: req.body.voltage,
    fairy: req.body.fairy,
    psychic: req.body.psychic,
    iceberg: req.body.iceberg,
    boulder7: req.body.boulder7,
    cascade7: req.body.cascade7,
    thunder7: req.body.thunder7,
    rainbow7: req.body.rainbow7,
    soul7: req.body.soul7,
    marsh7: req.body.marsh7,
    volcano7: req.body.volcano7,
    earth7: req.body.earth7,
    grass: req.body.grass,
    water: req.body.water,
    fire: req.body.fire,
    fighting: req.body.fighting,
    fairy2: req.body.fairy2,
    rock: req.body.rock,
    dark: req.body.dark,
    dragon: req.body.dragon,
    ghost: req.body.ghost,
    ice: req.body.ice
  });
  User.updateOne({_id: userId}, user).then(
    () => {
      res.status(201).json({
        message: 'User updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.follow = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
  const userId = decodedToken.userId;

  // Firstly, find the user account for the logged in user

  const update = await User.findOneAndUpdate({ _id: userId }, {$push: {following: {user: req.body.following, emoji: req.body.character}}})

  // Secondly, find the user account for the followed user

  const update2 = await User.findOneAndUpdate({ username: req.body.username }, {$push: {followers: {user: req.body.followers2, emoji: req.body.character2}}})

  if (!update || !update2) {
            return res.status(404).json({
              error: 'Unable to follow that user'
            })
        } else {
          return res.status(201).json({
            message: 'Users updated successfully!'
          })
        }
};

exports.unfollow = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
  const userId = decodedToken.userId;

  // Firstly, find the user account for the logged in user

  const update = await User.findOneAndUpdate({ _id: userId }, {$pull: {following: {user: req.body.following, emoji: req.body.character}}})

  // Secondly, find the user account for the followed user

  const update2 = await User.findOneAndUpdate({ username: req.body.username }, {$pull: {followers: {user: req.body.followers2, emoji: req.body.character2}}})

  if (!update || !update2) {
            return res.status(404).json({
              error: 'Unable to unfollow that user'
            })
        } else {
          return res.status(201).json({
            message: 'Users updated successfully!'
          })
        }
};
