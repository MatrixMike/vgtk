initSidebarItems({"constant":[["PRIORITY_DEFAULT",""],["PRIORITY_DEFAULT_IDLE",""],["PRIORITY_HIGH",""],["PRIORITY_HIGH_IDLE",""],["PRIORITY_LOW",""]],"fn":[["child_watch_add","Adds a closure to be called by the main loop the returned `Source` is attached to when a child process exits."],["child_watch_add_local","Adds a closure to be called by the main loop the returned `Source` is attached to when a child process exits."],["child_watch_source_new","Adds a closure to be called by the main loop the returned `Source` is attached to when a child process exits."],["idle_add","Adds a closure to be called by the default main loop when it's idle."],["idle_add_local","Adds a closure to be called by the default main loop when it's idle."],["idle_source_new","Adds a closure to be called by the main loop the return `Source` is attached to when it's idle."],["source_remove","Removes the source with the given id `source_id` from the default main context."],["timeout_add","Adds a closure to be called by the default main loop at regular intervals with millisecond granularity."],["timeout_add_local","Adds a closure to be called by the default main loop at regular intervals with millisecond granularity."],["timeout_add_seconds","Adds a closure to be called by the default main loop at regular intervals with second granularity."],["timeout_add_seconds_local","Adds a closure to be called by the default main loop at regular intervals with second granularity."],["timeout_source_new","Adds a closure to be called by the main loop the returned `Source` is attached to at regular intervals with millisecond granularity."],["timeout_source_new_seconds","Adds a closure to be called by the main loop the returned `Source` is attached to at regular intervals with second granularity."],["unix_fd_add","Adds a closure to be called by the main loop the returned `Source` is attached to whenever a UNIX file descriptor reaches the given IO condition."],["unix_fd_add_local","Adds a closure to be called by the main loop the returned `Source` is attached to whenever a UNIX file descriptor reaches the given IO condition."],["unix_fd_source_new","Adds a closure to be called by the main loop the returned `Source` is attached to whenever a UNIX file descriptor reaches the given IO condition."],["unix_signal_add","Adds a closure to be called by the default main loop whenever a UNIX signal is raised."],["unix_signal_add_local","Adds a closure to be called by the default main loop whenever a UNIX signal is raised."],["unix_signal_source_new","Adds a closure to be called by the main loop the returned `Source` is attached to whenever a UNIX signal is raised."]],"struct":[["CallbackGuard","Unwinding propagation guard. Aborts the process if destroyed while panicking."],["Continue","Continue calling the closure in the future iterations or drop it."],["Pid","Process identificator"],["Priority","The priority of sources"],["SourceId","The id of a source that is returned by `idle_add` and `timeout_add`."]]});