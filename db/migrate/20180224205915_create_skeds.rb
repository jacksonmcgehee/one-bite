class CreateSkeds < ActiveRecord::Migration[5.1]
  def change
    create_table :skeds do |t|
      t.string :name
      t.string :picture
      t.text :details
      t.date :event_date

      t.timestamps
    end
  end
end
