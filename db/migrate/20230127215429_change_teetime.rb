class ChangeTeetime < ActiveRecord::Migration[6.1]
  def change
    remove_column :teetimes, :tiempo
    remove_column :teetimes, :semana
    add_column :teetimes, :time, :string
    add_column :teetimes, :date, :string
  end
end
