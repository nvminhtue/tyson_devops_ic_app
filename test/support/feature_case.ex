defmodule TysonDevopsIcAppWeb.FeatureCase do
  use ExUnit.CaseTemplate

  using do
    quote do

      use ExVCR.Mock, adapter: ExVCR.Adapter.Hackney

      use Wallaby.Feature
      use Mimic

      import TysonDevopsIcApp.Factory
      import TysonDevopsIcAppWeb.Gettext

      alias TysonDevopsIcApp.Repo
      alias TysonDevopsIcAppWeb.Endpoint
      alias TysonDevopsIcAppWeb.Router.Helpers, as: Routes

      @moduletag :feature_test
    end
  end
end
