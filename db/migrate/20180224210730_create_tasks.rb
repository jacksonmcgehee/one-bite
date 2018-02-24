class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.date :due_date
      t.boolean :is_complete
      t.boolean :is_in_progress
      t.references :user, foreign_key: true
      t.references :sked, foreign_key: true

      t.timestamps
    end
  end
end
