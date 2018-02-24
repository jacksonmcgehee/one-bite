class CreateUserSkeds < ActiveRecord::Migration[5.1]
  def change
    create_table :user_skeds do |t|
      t.references :user, foreign_key: true
      t.references :sked, foreign_key: true

      t.timestamps
    end
  end
end
