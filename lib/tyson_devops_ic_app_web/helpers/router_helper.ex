defmodule TysonDevopsIcAppWeb.RouterHelper do
  def health_path, do: Application.get_env(:tyson_devops_ic_app, TysonDevopsIcAppWeb.Endpoint)[:health_path]
end
