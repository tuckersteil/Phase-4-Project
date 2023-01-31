class AddColumnTeetime < ActiveRecord::Migration[6.1]
  def change
    add_column :teetimes, :status, :string
  end
end
