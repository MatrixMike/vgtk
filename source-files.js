var N = null;var sourcesIndex = {};
sourcesIndex["atk"] = {"name":"","dirs":[{"name":"auto","files":["action.rs","alias.rs","component.rs","document.rs","editable_text.rs","enums.rs","flags.rs","gobject_accessible.rs","hyperlink.rs","hyperlink_impl.rs","hypertext.rs","image.rs","misc.rs","mod.rs","no_op_object.rs","no_op_object_factory.rs","object.rs","object_factory.rs","plug.rs","range.rs","rectangle.rs","registry.rs","relation.rs","relation_set.rs","selection.rs","socket.rs","state_set.rs","streamable_content.rs","table.rs","table_cell.rs","text.rs","text_range.rs","util.rs","value.rs","window.rs"]}],"files":["attribute.rs","attribute_set.rs","editable_text.rs","lib.rs","prelude.rs","rt.rs","table.rs","text_rectangle.rs"]};
sourcesIndex["atk_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["atty"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cairo"] = {"name":"","dirs":[{"name":"font","files":["font_face.rs","font_options.rs","mod.rs","scaled_font.rs"]}],"files":["constants.rs","context.rs","device.rs","enums.rs","error.rs","image_surface.rs","lib.rs","matrices.rs","paths.rs","patterns.rs","recording_surface.rs","rectangle.rs","rectangle_int.rs","region.rs","surface.rs","surface_macros.rs","user_data.rs","utils.rs"]};
sourcesIndex["cairo_sys"] = {"name":"","files":["gobject.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["colored"] = {"name":"","files":["color.rs","control.rs","lib.rs","style.rs"]};
sourcesIndex["futures"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_channel"] = {"name":"","dirs":[{"name":"mpsc","files":["mod.rs","queue.rs","sink_impl.rs"]}],"files":["lib.rs","lock.rs","oneshot.rs"]};
sourcesIndex["futures_core"] = {"name":"","dirs":[{"name":"task","dirs":[{"name":"__internal","files":["atomic_waker.rs","mod.rs"]}],"files":["mod.rs","poll.rs"]}],"files":["future.rs","lib.rs","stream.rs"]};
sourcesIndex["futures_executor"] = {"name":"","files":["enter.rs","lib.rs","local_pool.rs"]};
sourcesIndex["futures_io"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_macro"] = {"name":"","files":["join.rs","lib.rs","select.rs"]};
sourcesIndex["futures_sink"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_task"] = {"name":"","files":["arc_wake.rs","future_obj.rs","lib.rs","noop_waker.rs","spawn.rs","waker.rs","waker_ref.rs"]};
sourcesIndex["futures_util"] = {"name":"","dirs":[{"name":"async_await","files":["join_mod.rs","mod.rs","pending.rs","poll.rs","random.rs","select_mod.rs"]},{"name":"future","dirs":[{"name":"future","files":["catch_unwind.rs","chain.rs","flatten.rs","flatten_stream.rs","fuse.rs","inspect.rs","into_stream.rs","map.rs","mod.rs","never_error.rs","remote_handle.rs","shared.rs","then.rs","unit_error.rs"]},{"name":"try_future","files":["and_then.rs","err_into.rs","flatten_sink.rs","flatten_stream_sink.rs","inspect_err.rs","inspect_ok.rs","into_future.rs","map_err.rs","map_ok.rs","map_ok_or_else.rs","mod.rs","or_else.rs","try_chain.rs","try_flatten_stream.rs","unwrap_or_else.rs"]}],"files":["abortable.rs","either.rs","join.rs","join_all.rs","lazy.rs","maybe_done.rs","mod.rs","option.rs","pending.rs","poll_fn.rs","ready.rs","select.rs","select_all.rs","select_ok.rs","try_join.rs","try_join_all.rs","try_select.rs"]},{"name":"io","files":["allow_std.rs","buf_reader.rs","buf_writer.rs","chain.rs","close.rs","copy.rs","copy_buf.rs","cursor.rs","empty.rs","flush.rs","into_sink.rs","lines.rs","mod.rs","read.rs","read_exact.rs","read_line.rs","read_to_end.rs","read_to_string.rs","read_until.rs","read_vectored.rs","repeat.rs","seek.rs","sink.rs","split.rs","take.rs","window.rs","write.rs","write_all.rs","write_vectored.rs"]},{"name":"lock","files":["bilock.rs","mod.rs","mutex.rs"]},{"name":"sink","files":["buffer.rs","close.rs","drain.rs","err_into.rs","fanout.rs","flush.rs","map_err.rs","mod.rs","send.rs","send_all.rs","with.rs","with_flat_map.rs"]},{"name":"stream","dirs":[{"name":"futures_unordered","files":["abort.rs","iter.rs","mod.rs","ready_to_run_queue.rs","task.rs"]},{"name":"stream","files":["buffer_unordered.rs","buffered.rs","catch_unwind.rs","chain.rs","chunks.rs","collect.rs","concat.rs","enumerate.rs","filter.rs","filter_map.rs","flatten.rs","fold.rs","for_each.rs","for_each_concurrent.rs","forward.rs","fuse.rs","inspect.rs","into_future.rs","map.rs","mod.rs","next.rs","peek.rs","scan.rs","select_next_some.rs","skip.rs","skip_while.rs","split.rs","take.rs","take_while.rs","then.rs","zip.rs"]},{"name":"try_stream","files":["and_then.rs","err_into.rs","inspect_err.rs","inspect_ok.rs","into_async_read.rs","into_stream.rs","map_err.rs","map_ok.rs","mod.rs","or_else.rs","try_buffer_unordered.rs","try_collect.rs","try_concat.rs","try_filter.rs","try_filter_map.rs","try_flatten.rs","try_fold.rs","try_for_each.rs","try_for_each_concurrent.rs","try_next.rs","try_skip_while.rs","try_unfold.rs"]}],"files":["empty.rs","futures_ordered.rs","iter.rs","mod.rs","once.rs","pending.rs","poll_fn.rs","repeat.rs","select.rs","select_all.rs","unfold.rs"]},{"name":"task","files":["mod.rs","spawn.rs"]}],"files":["lib.rs","never.rs"]};
sourcesIndex["gdk"] = {"name":"","dirs":[{"name":"auto","files":["app_launch_context.rs","cursor.rs","device.rs","device_manager.rs","display.rs","display_manager.rs","drag_context.rs","enums.rs","event_sequence.rs","flags.rs","frame_clock.rs","frame_timings.rs","functions.rs","gl_context.rs","keymap.rs","mod.rs","screen.rs","visual.rs","window.rs"]}],"files":["atom.rs","cairo_interaction.rs","change_data.rs","device.rs","device_manager.rs","drag_context.rs","enums.rs","event.rs","event_button.rs","event_configure.rs","event_crossing.rs","event_dnd.rs","event_expose.rs","event_focus.rs","event_grab_broken.rs","event_key.rs","event_motion.rs","event_owner_change.rs","event_property.rs","event_proximity.rs","event_scroll.rs","event_selection.rs","event_setting.rs","event_touch.rs","event_visibility.rs","event_window_state.rs","frame_clock.rs","frame_timings.rs","functions.rs","geometry.rs","keymap.rs","keymap_key.rs","keys.rs","lib.rs","prelude.rs","rectangle.rs","rgba.rs","rt.rs","screen.rs","time_coord.rs","visual.rs","window.rs"]};
sourcesIndex["gdk_pixbuf"] = {"name":"","dirs":[{"name":"auto","files":["enums.rs","mod.rs","pixbuf.rs","pixbuf_format.rs","pixbuf_loader.rs","pixbuf_simple_anim.rs"]}],"files":["animation.rs","lib.rs","pixbuf.rs","prelude.rs"]};
sourcesIndex["gdk_pixbuf_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["gdk_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["gio"] = {"name":"","dirs":[{"name":"auto","files":["action.rs","action_group.rs","action_map.rs","app_info.rs","app_info_monitor.rs","app_launch_context.rs","application.rs","application_command_line.rs","buffered_input_stream.rs","buffered_output_stream.rs","bytes_icon.rs","cancellable.rs","charset_converter.rs","constants.rs","converter.rs","converter_input_stream.rs","converter_output_stream.rs","credentials.rs","data_input_stream.rs","data_output_stream.rs","desktop_app_info.rs","drive.rs","emblem.rs","emblemed_icon.rs","enums.rs","file.rs","file_attribute_matcher.rs","file_enumerator.rs","file_icon.rs","file_info.rs","file_input_stream.rs","file_io_stream.rs","file_monitor.rs","file_output_stream.rs","filename_completer.rs","filter_input_stream.rs","filter_output_stream.rs","flags.rs","functions.rs","icon.rs","inet_address.rs","inet_address_mask.rs","inet_socket_address.rs","input_stream.rs","io_stream.rs","list_model.rs","list_store.rs","loadable_icon.rs","memory_input_stream.rs","memory_output_stream.rs","menu.rs","menu_attribute_iter.rs","menu_item.rs","menu_link_iter.rs","menu_model.rs","mod.rs","mount.rs","mount_operation.rs","network_address.rs","network_monitor.rs","network_service.rs","notification.rs","output_stream.rs","permission.rs","pollable_input_stream.rs","pollable_output_stream.rs","property_action.rs","proxy.rs","proxy_address.rs","proxy_resolver.rs","remote_action_group.rs","resolver.rs","resource.rs","seekable.rs","settings.rs","settings_backend.rs","settings_schema.rs","settings_schema_key.rs","settings_schema_source.rs","simple_action.rs","simple_action_group.rs","simple_io_stream.rs","simple_permission.rs","socket.rs","socket_address.rs","socket_address_enumerator.rs","socket_client.rs","socket_connectable.rs","socket_connection.rs","socket_listener.rs","socket_service.rs","srv_target.rs","subprocess.rs","subprocess_launcher.rs","tcp_connection.rs","themed_icon.rs","threaded_socket_service.rs","tls_certificate.rs","tls_client_connection.rs","tls_connection.rs","tls_database.rs","tls_file_database.rs","tls_interaction.rs","tls_password.rs","tls_server_connection.rs","unix_input_stream.rs","unix_mount_entry.rs","unix_mount_point.rs","unix_output_stream.rs","unix_socket_address.rs","vfs.rs","volume.rs","volume_monitor.rs","zlib_compressor.rs","zlib_decompressor.rs"]},{"name":"subclass","files":["application.rs","input_stream.rs","io_stream.rs","mod.rs","output_stream.rs","seekable.rs"]}],"files":["application.rs","converter.rs","desktop_app_info.rs","error.rs","file.rs","file_attribute_matcher.rs","file_enumerator.rs","flags.rs","gio_future.rs","inet_address.rs","input_stream.rs","lib.rs","list_store.rs","memory_input_stream.rs","memory_output_stream.rs","output_stream.rs","pollable_input_stream.rs","pollable_output_stream.rs","prelude.rs","read_input_stream.rs","resource.rs","settings.rs","socket.rs","socket_listener.rs","subprocess.rs","subprocess_launcher.rs","unix_input_stream.rs","unix_mount_entry.rs","unix_mount_point.rs","unix_output_stream.rs","unix_socket_address.rs","write_output_stream.rs"]};
sourcesIndex["gio_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["glib"] = {"name":"","dirs":[{"name":"auto","files":["alias.rs","checksum.rs","constants.rs","date_time.rs","enums.rs","flags.rs","functions.rs","key_file.rs","main_context.rs","main_loop.rs","mod.rs","source.rs","time_zone.rs"]},{"name":"gobject","dirs":[{"name":"auto","files":["binding.rs","flags.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"subclass","files":["boxed.rs","interface.rs","mod.rs","object.rs","simple.rs","types.rs"]}],"files":["boxed.rs","byte_array.rs","bytes.rs","char.rs","checksum.rs","clone.rs","closure.rs","date.rs","enums.rs","error.rs","file_error.rs","functions.rs","gstring.rs","key_file.rs","lib.rs","main_context.rs","main_context_channel.rs","main_context_futures.rs","object.rs","param_spec.rs","prelude.rs","quark.rs","send_unique.rs","shared.rs","signal.rs","source.rs","source_futures.rs","string.rs","time_val.rs","translate.rs","types.rs","utils.rs","value.rs","value_array.rs","variant.rs","variant_type.rs","wrapper.rs"]};
sourcesIndex["glib_sys"] = {"name":"","files":["lib.rs","manual.rs"]};
sourcesIndex["gobject_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["gtk"] = {"name":"","dirs":[{"name":"auto","files":["about_dialog.rs","accel_group.rs","accel_label.rs","action_bar.rs","actionable.rs","adjustment.rs","app_chooser_button.rs","app_chooser_dialog.rs","app_chooser_widget.rs","application.rs","application_window.rs","aspect_frame.rs","assistant.rs","bin.rs","box_.rs","buildable.rs","builder.rs","button.rs","button_box.rs","calendar.rs","cell_area.rs","cell_area_box.rs","cell_area_context.rs","cell_editable.rs","cell_layout.rs","cell_renderer.rs","cell_renderer_accel.rs","cell_renderer_combo.rs","cell_renderer_pixbuf.rs","cell_renderer_progress.rs","cell_renderer_spin.rs","cell_renderer_spinner.rs","cell_renderer_text.rs","cell_renderer_toggle.rs","cell_view.rs","check_button.rs","check_menu_item.rs","clipboard.rs","color_button.rs","color_chooser.rs","color_chooser_dialog.rs","color_chooser_widget.rs","combo_box.rs","combo_box_text.rs","constants.rs","container.rs","css_provider.rs","css_section.rs","dialog.rs","drawing_area.rs","editable.rs","entry.rs","entry_completion.rs","enums.rs","event_box.rs","event_controller.rs","expander.rs","file_chooser.rs","file_chooser_button.rs","file_chooser_dialog.rs","file_chooser_native.rs","file_chooser_widget.rs","file_filter.rs","fixed.rs","flags.rs","flow_box.rs","flow_box_child.rs","font_button.rs","font_chooser.rs","font_chooser_dialog.rs","font_chooser_widget.rs","frame.rs","functions.rs","gesture.rs","gesture_drag.rs","gesture_long_press.rs","gesture_multi_press.rs","gesture_pan.rs","gesture_rotate.rs","gesture_single.rs","gesture_swipe.rs","gesture_zoom.rs","gl_area.rs","grid.rs","header_bar.rs","icon_info.rs","icon_theme.rs","icon_view.rs","im_context.rs","im_context_simple.rs","im_multicontext.rs","image.rs","info_bar.rs","invisible.rs","label.rs","layout.rs","level_bar.rs","link_button.rs","list_box.rs","list_box_row.rs","list_store.rs","lock_button.rs","menu.rs","menu_bar.rs","menu_button.rs","menu_item.rs","menu_shell.rs","menu_tool_button.rs","message_dialog.rs","misc.rs","mod.rs","model_button.rs","mount_operation.rs","native_dialog.rs","notebook.rs","offscreen_window.rs","orientable.rs","overlay.rs","page_setup.rs","paned.rs","paper_size.rs","places_sidebar.rs","plug.rs","popover.rs","popover_menu.rs","print_context.rs","print_operation.rs","print_operation_preview.rs","print_settings.rs","progress_bar.rs","radio_button.rs","radio_menu_item.rs","radio_tool_button.rs","range.rs","recent_chooser.rs","recent_chooser_dialog.rs","recent_chooser_menu.rs","recent_chooser_widget.rs","recent_filter.rs","recent_info.rs","recent_manager.rs","revealer.rs","scale.rs","scale_button.rs","scrollable.rs","scrollbar.rs","scrolled_window.rs","search_bar.rs","search_entry.rs","selection_data.rs","separator.rs","separator_menu_item.rs","separator_tool_item.rs","settings.rs","shortcuts_window.rs","size_group.rs","socket.rs","spin_button.rs","spinner.rs","stack.rs","stack_sidebar.rs","stack_switcher.rs","statusbar.rs","style_context.rs","style_properties.rs","style_provider.rs","switch.rs","target_list.rs","text_attributes.rs","text_buffer.rs","text_child_anchor.rs","text_iter.rs","text_mark.rs","text_tag.rs","text_tag_table.rs","text_view.rs","toggle_button.rs","toggle_tool_button.rs","tool_button.rs","tool_item.rs","tool_item_group.rs","tool_palette.rs","tool_shell.rs","toolbar.rs","tooltip.rs","tree_drag_dest.rs","tree_drag_source.rs","tree_iter.rs","tree_model.rs","tree_model_filter.rs","tree_model_sort.rs","tree_path.rs","tree_row_reference.rs","tree_selection.rs","tree_sortable.rs","tree_store.rs","tree_view.rs","tree_view_column.rs","viewport.rs","volume_button.rs","widget.rs","widget_path.rs","window.rs","window_group.rs"]},{"name":"subclass","files":["application.rs","application_window.rs","bin.rs","box_.rs","container.rs","dialog.rs","event_box.rs","header_bar.rs","mod.rs","stack.rs","widget.rs","window.rs"]}],"files":["accel_group.rs","app_chooser.rs","application.rs","application_window.rs","border.rs","buildable.rs","builder.rs","cell_renderer_pixbuf.rs","clipboard.rs","color_button.rs","color_chooser.rs","combo_box.rs","dialog.rs","drag_context.rs","entry_buffer.rs","entry_completion.rs","enums.rs","file_chooser_dialog.rs","fixed.rs","flow_box.rs","im_context_simple.rs","invisible.rs","lib.rs","list_box.rs","list_store.rs","menu.rs","message_dialog.rs","notebook.rs","page_range.rs","prelude.rs","print_settings.rs","radio_button.rs","radio_menu_item.rs","radio_tool_button.rs","recent_chooser_dialog.rs","recent_data.rs","requisition.rs","response_type.rs","rt.rs","selection_data.rs","signal.rs","switch.rs","target_entry.rs","target_list.rs","text_buffer.rs","text_iter.rs","tree_model_filter.rs","tree_model_sort.rs","tree_path.rs","tree_row_reference.rs","tree_sortable.rs","tree_store.rs","widget.rs","window.rs","xlib.rs"]};
sourcesIndex["gtk_sys"] = {"name":"","files":["lib.rs","manual.rs"]};
sourcesIndex["lalrpop_util"] = {"name":"","files":["lib.rs","state_machine.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","lib.rs","naive.rs"]};
sourcesIndex["pango"] = {"name":"","dirs":[{"name":"auto","files":["alias.rs","attr_iterator.rs","attr_list.rs","attribute.rs","color.rs","constants.rs","context.rs","coverage.rs","engine_lang.rs","engine_shape.rs","enums.rs","flags.rs","font.rs","font_description.rs","font_face.rs","font_family.rs","font_map.rs","font_metrics.rs","fontset.rs","fontset_simple.rs","functions.rs","glyph_item.rs","glyph_item_iter.rs","glyph_string.rs","item.rs","layout.rs","layout_iter.rs","layout_line.rs","matrix.rs","mod.rs","renderer.rs","tab_array.rs"]}],"files":["analysis.rs","attr_class.rs","attr_iterator.rs","attr_list.rs","attribute.rs","font_description.rs","functions.rs","glyph.rs","gravity.rs","item.rs","language.rs","lib.rs","prelude.rs","rectangle.rs"]};
sourcesIndex["pango_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["pin_utils"] = {"name":"","files":["lib.rs","projection.rs","stack_pin.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["fallback.rs","lib.rs","strnom.rs","wrapper.rs"]};
sourcesIndex["proc_macro_hack"] = {"name":"","files":["lib.rs"]};
sourcesIndex["proc_macro_nested"] = {"name":"","files":["lib.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["slab"] = {"name":"","files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["gen_helper.rs","visit.rs"]}],"files":["attr.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","ty.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["vgtk"] = {"name":"","dirs":[{"name":"ext","files":["mod.rs"]},{"name":"vdom","files":["component_state.rs","gtk_state.rs","mod.rs"]},{"name":"vnode","files":["component.rs","gobject.rs","handler.rs","mod.rs","property.rs"]}],"files":["callback.rs","component.rs","lib.rs","menu_builder.rs","properties.rs","scope.rs","types.rs"]};
sourcesIndex["vgtk_macros"] = {"name":"","files":["context.rs","error.rs","gtk.rs","lexer.rs","lib.rs","parser.rs"]};
createSourceSidebar();
