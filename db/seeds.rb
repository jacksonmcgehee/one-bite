# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Sked.destroy_all

the_brain = User.create!(
    email: 'brain@acme.com',
    password: '*0neB!+3*',
    password_confirmation: '*0neB!+3*',
    image: 'https://i.imgur.com/P2nijtH.jpg',
    nickname: 'The Brain'
)

pinky = User.create!(
    email: 'pinky@acme.com',
    password: '*0neB!+3*',
    password_confirmation: '*0neB!+3*',
    image: 'https://i.imgur.com/MyvTGpB.jpg',
    nickname: 'Pinky'
)

# take_over_world = Sked.create!(
#     name: 'Take Over the World!',
#     picture: "https://i.imgur.com/19rnVeH.jpg",
#     details: "Due to my superior intelligence, I will subjugate the entire World to my rule."
# )

# take_over_world << task1 = Task.create!(
#     name: "Tonight",
#     description: "Wait until everyone is asleep.",
#     is_complete: false,
#     is_in_progress: false,
# )

# take_over_world << task2 = Task.create!(
#     name: "Snacks",
#     description: "Buy cheese.",
#     is_complete: false,
#     is_in_progress: false,
# )





