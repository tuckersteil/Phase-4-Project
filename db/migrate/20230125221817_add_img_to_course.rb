class AddImgToCourse < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :img, :string
  end
end
