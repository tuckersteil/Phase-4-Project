class CreateTeetimes < ActiveRecord::Migration[6.1]
  def change
    create_table :teetimes do |t|
      t.time :time
      t.date :date
      t.integer :players
      t.integer :price
      t.integer :holes
      t.integer :user_id
      t.integer :course_id

      t.timestamps
    end
  end
end
