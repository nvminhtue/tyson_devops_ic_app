#!/bin/sh

bin/tyson_devops_ic_app eval "TysonDevopsIcApp.ReleaseTasks.migrate()"

bin/tyson_devops_ic_app start
